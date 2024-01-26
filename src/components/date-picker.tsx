import { DateTime, Interval } from 'luxon'
import { useState } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { css } from 'styled-system/css'
import { Box, Grid, styled } from 'styled-system/jsx'

type HeadingProps = { date: DateTime | null; setter: (monthNumber: number) => void }
function Heading({ date, setter }: HeadingProps) {
  const styles = css({
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    '& > a': {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: '.5rem',
      textAlign: 'center',
      rounded: 'lg',
      _hover: {
        bg: 'slate.400',
      },
    },
    '& > .month': {
      textAlign: 'center',
      p: 2,
      _hover: {
        bg: 'slate.400',
        rounded: 'lg',
      },
    },
  })

  return (
    <styled.nav className={styles} m='2rem' p='2' bg='slate.800'>
      <styled.a mr='auto' onClick={() => setter(-1)}>
        <TbChevronLeft />
      </styled.a>
      <Box className='month' onClick={() => setter(0)}>
        <h1>{date?.monthLong}</h1>
        <h2>{date?.year}</h2>
      </Box>
      <styled.a ml='auto' onClick={() => setter(1)}>
        <TbChevronRight />
      </styled.a>
    </styled.nav>
  )
}

function Labels() {
  const labels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  const styles = css({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'slate.600',
    fontSize: 16,
    cursor: 'initial',
  })

  return (
    <>
      {labels.map((label) => <span key={label} className={styles}>{label}</span>)}
    </>
  )
}

type DaysProps = {
  days: DateTime<true>[]
  dates: { monthDate: DateTime; startDate: DateTime | null; endDate: DateTime | null }
  setter: (date: DateTime) => unknown
}
function Days({ days, dates, setter }: DaysProps) {
  const { monthDate, startDate, endDate } = dates

  const daySelection = startDate != null && endDate == null
  const rangeSelection = startDate != null && endDate != null
  const interval = rangeSelection ? Interval.fromDateTimes(startDate, endDate) : undefined
  const today = DateTime.now().startOf('day')

  const Day = ({ date }: { date: DateTime }) => {
    const styles = css({
      color: 'slate.200',
      fontWeight: 'medium',
      '&.inactive': { color: 'slate.500' },
      '&.start': { bg: 'pink.300', roundedLeft: 'lg' },
      '&.end': { bg: 'pink.300', roundedRight: 'lg' },
      '&.range': { bg: 'pink.300' },
      '&.day': { bg: 'pink.300', roundedLeft: 'lg', roundedRight: 'lg' },
      '&.today': { textDecoration: 'underline' },
      _hover: { color: 'white', cursor: 'pointer' },
    })

    const dayColor = rangeSelection && startDate.equals(date)
      ? 'start'
      : rangeSelection && endDate.equals(date)
      ? 'end'
      : rangeSelection && interval?.contains(date)
      ? 'range'
      : daySelection && startDate.equals(date)
      ? 'day'
      : undefined

    const inMonth = date.month == monthDate.month ? undefined : 'inactive'
    const isToday = date.equals(today) ? 'today' : undefined

    return (
      <p className={`${styles} ${dayColor} ${inMonth} ${isToday}`}
        onClick={() => setter(date)}>
        {date.day}
      </p>
    )
  }

  return <>{days.map((date) => <Day key={date.millisecond} date={date} />)}</>
}

export default function DatePicker() {
  const [monthDate, setMonthDate] = useState<DateTime>(DateTime.now().startOf('day'))
  const [startDate, setStartDate] = useState<DateTime | null>(
    monthDate.minus({ days: 5 }),
  )
  const [endDate, setEndDate] = useState<DateTime | null>(monthDate.plus({ days: 2 }))

  const days = Interval.fromDateTimes(
    monthDate.startOf('month').startOf('week'),
    monthDate.endOf('month').endOf('week'),
  ).splitBy({ day: 1 }).map((d) => d.start) as DateTime<true>[]

  const dateSetter = (date: DateTime) => {
    const noSelection = startDate == null && endDate == null
    const daySelection = startDate != null && endDate == null
    const rangeSelection = startDate != null && endDate != null

    switch (true) {
      case noSelection:
        setStartDate(date)
        return
      case rangeSelection:
        setStartDate(date)
        setEndDate(null)
        return
      case daySelection && date.equals(startDate):
        setStartDate(null)
        return
      case daySelection && date < startDate:
        setStartDate(date)
        return
      case daySelection && date > startDate:
        setEndDate(date)
        return
    }
  }

  const monthSetter = (monthOffset: number) => {
    monthOffset != 0
      ? setMonthDate(monthDate.plus({ months: monthOffset }))
      : monthOffset == 0 && startDate == null
      ? setMonthDate(DateTime.now())
      : monthOffset == 0 && startDate != null
      ? setMonthDate(startDate)
      : undefined
  }

  const styles = css({
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(7, 3rem)',
  })

  return (
    <>
      <Heading date={monthDate} setter={monthSetter} />
      <Grid className={styles} p='4' m='8' gap='1.5' bg='slate.800'>
        <Labels />
        <Days days={days} dates={{ monthDate, startDate, endDate }} setter={dateSetter} />
      </Grid>
    </>
  )
}
