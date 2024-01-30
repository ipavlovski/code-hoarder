import { autoUpdate, flip, FloatingFocusManager, FloatingPortal, offset, size, useDismiss,
  useFloating, useId, useInteractions, useListNavigation,
  useRole } from '@floating-ui/react'
import type { HTMLProps, ReactNode } from 'react'
import { createContext, forwardRef, useContext, useImperativeHandle, useRef,
  useState } from 'react'
import { LuChevronsUpDown } from 'react-icons/lu'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

const data = ['Alfalfa Sprouts', 'Apple', 'Apricot', 'Artichoke', 'Asian Pear',
  'Asparagus', 'Atemoya', 'Avocado', 'Bamboo Shoots', 'Banana', 'Bean Sprouts', 'Beans',
  'Beets', 'Belgian Endive', 'Bell Peppers', 'Bitter Melon', 'Blackberries',
  'Blueberries', 'Bok Choy', 'Boniato', 'Boysenberries', 'Broccoflower', 'Broccoli',
  'Brussels Sprouts', 'Cabbage', 'Cactus Pear', 'Cantaloupe', 'Carambola', 'Carrots',
  'Casaba Melon', 'Cauliflower', 'Celery', 'Chayote', 'Cherimoya', 'Cherries', 'Coconuts',
  'Collard Greens', 'Corn', 'Cranberries', 'Cucumber', 'Dates', 'Dried Plums', 'Eggplant',
  'Endive', 'Escarole', 'Feijoa', 'Fennel', 'Figs', 'Garlic', 'Gooseberries',
  'Grapefruit', 'Grapes', 'Green Beans', 'Green Onions', 'Greens', 'Guava', 'Hominy',
  'Honeydew Melon', 'Horned Melon', 'Iceberg Lettuce', 'Jerusalem Artichoke', 'Jicama',
  'Kale', 'Kiwifruit', 'Kohlrabi', 'Kumquat', 'Leeks', 'Lemons', 'Lettuce', 'Lima Beans',
  'Limes', 'Longan', 'Loquat', 'Lychee', 'Madarins', 'Malanga', 'Mandarin Oranges',
  'Mangos', 'Mulberries', 'Mushrooms', 'Napa', 'Nectarines', 'Okra', 'Onion', 'Oranges',
  'Papayas', 'Parsnip', 'Passion Fruit', 'Peaches', 'Pears', 'Peas', 'Peppers',
  'Persimmons', 'Pineapple', 'Plantains', 'Plums', 'Pomegranate', 'Potatoes',
  'Prickly Pear', 'Prunes', 'Pummelo', 'Pumpkin', 'Quince', 'Radicchio', 'Radishes',
  'Raisins', 'Raspberries', 'Red Cabbage', 'Rhubarb', 'Romaine Lettuce', 'Rutabaga',
  'Shallots', 'Snow Peas', 'Spinach', 'Sprouts', 'Squash', 'Strawberries', 'String Beans',
  'Sweet Potato', 'Tangelo', 'Tangerines', 'Tomatillo', 'Tomato', 'Turnip', 'Ugli Fruit',
  'Water Chestnuts', 'Watercress', 'Watermelon', 'Waxed Beans', 'Yams', 'Yellow Squash',
  'Yuca/Cassava', 'Zucchini Squash']

type CategoriesContextStore = {
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  getReferenceProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
  items: string[]
}
const CategoriesContext = createContext<CategoriesContextStore>({
  activeIndex: null,
  setActiveIndex: () => ({}),
  inputValue: '',
  setInputValue: () => ({}),
  setOpen: () => ({}),
  getReferenceProps: () => ({}),
  items: [],
})

type ItemProps = HTMLProps<HTMLDivElement> & { children: ReactNode; active: boolean }
const Item = forwardRef<HTMLDivElement, ItemProps>(
  function Item({ children, active, ...rest }, ref) {
    const id = useId()

    const styles = css({
      padding: 1,
      rounded: 'sm',
      // rounded: 'md',
    })

    const style: React.CSSProperties = {
      background: active ? 'grey' : 'none',
      cursor: 'default',
      ...rest.style,
    }

    return (
      <div ref={ref} role='option' id={id} aria-selected={active} className={styles}
        style={style} {...rest}>
        {children}
      </div>
    )
  },
)

const InputComponent = forwardRef<HTMLInputElement>(
  function InputComponent(props, ref) {
    const {
      setOpen,
      getReferenceProps,
      activeIndex,
      setActiveIndex,
      setInputValue,
      inputValue,
      items,
    } = useContext(CategoriesContext)

    const styles = css({
      borderBottom: '2px solid white',
      bg: 'transparent',
      color: 'gray.200',
      paddingLeft: '1.5',
      paddingRight: '8',
      paddingY: '1',
      outline: 0,
      borderWidth: '0 0 2px',
      borderColor: 'gray.500',
      transition: 'border-color 300ms ease',
      fontSize: '.9rem',
      '&:focus': {
        borderColor: 'pink.300',
      },
    })

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setInputValue(value)
      value ? (setOpen(true), setActiveIndex(0)) : setOpen(false)
    }

    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
        setInputValue(items[activeIndex])
        setActiveIndex(null)
        setOpen(false)
      }
    }

    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <input className={styles} {...getReferenceProps({
          ref: ref,
          onChange: onInputChange,
          onKeyDown: onInputKeyDown,
          value: inputValue,
          placeholder: 'Category...',
          'aria-autocomplete': 'list',
        })} />
        <LuChevronsUpDown style={{ position: 'absolute', top: 8, right: 8 }}
          onClick={() => (setOpen((prevState) => !prevState))} />
      </div>
    )
  },
)

type DropdownProps = {
  getItemProps: ReturnType<typeof useInteractions>['getItemProps']
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps']
  floatingStyles: React.CSSProperties
}

type DropdownRef = {
  listRef: (HTMLElement | null)[]
  domReference: HTMLInputElement | null
  setFloating: (node: HTMLElement | null) => void
}

const Dropdown = forwardRef<DropdownRef, DropdownProps>(
  function Dropdown(props, ref) {
    const { floatingStyles, getFloatingProps, getItemProps } = props
    const {
      setOpen,
      getReferenceProps,
      activeIndex,
      setActiveIndex,
      setInputValue,
      inputValue,
      items,
    } = useContext(CategoriesContext)

    const styles = css({
      bg: 'transparent',
      p: '2',
      rounded: 'md',
    })

    const domReference = (typeof ref != 'function' && ref?.current?.domReference) || null
    const listRef = (typeof ref != 'function' && ref?.current?.listRef) || null
    const setFloating = (typeof ref != 'function' && ref?.current?.setFloating) || null

    return (
      <div className={styles} {...getFloatingProps({
        ref: setFloating,
        style: {
          ...floatingStyles,
          overflowY: 'auto',
          border: '1px solid var(--colors-pink-300)',
        },
      })}>
        {items.map((item, index) => (
          <Item key={item} active={activeIndex === index} {...getItemProps({
            ref: (node) => {
              if (listRef) listRef[index] = node
            },
            onClick: () => {
              setInputValue(item)
              setOpen(false)
              domReference?.focus()
            },
          })}>
            {item}
          </Item>
        ))}
      </div>
    )
  },
)

function AutoComplete() {
  /* 1: HOOKS */
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

  /* 2: USE FLOATING */
  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      offset(8),
      size({
        apply: ({ rects, availableHeight, elements }) => {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          })
        },
        padding: 10,
      }),
    ],
  })

  const ref = useRef<DropdownRef>(null)
  useImperativeHandle(ref, () => ({
    listRef: listRef.current,
    domReference: refs.domReference.current,
    setFloating: refs.setFloating,
  }))

  /* 3: USE INTERACTIONS */
  const role = useRole(context, { role: 'listbox' })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav],
  )

  /* 4: CUSTOM HANDLERS */
  const items = data.filter((item) =>
    item.toLowerCase().startsWith(inputValue.toLowerCase())
  )

  return (
    <CategoriesContext.Provider
      value={{ activeIndex, setActiveIndex, inputValue, setInputValue, setOpen,
        getReferenceProps, items }}>
      <InputComponent ref={refs.setReference} />
      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
            <Dropdown {...{ getItemProps, getFloatingProps, floatingStyles }} ref={ref} />
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </CategoriesContext.Provider>
  )
}

export default function Combobox() {
  return (
    <styled.div m='4'>
      <AutoComplete />
    </styled.div>
  )
}
