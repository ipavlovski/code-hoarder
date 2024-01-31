import { type ChangeEventHandler, useState } from 'react'
import { LuChevronsUpDown } from 'react-icons/lu'
import { css } from 'styled-system/css'
import { Box, Center, Flex, styled } from 'styled-system/jsx'

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

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  // const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
    setIsOpen(true)
  }

  const filtered = data.filter((item) => (
    item.toLowerCase().startsWith(inputValue.toLowerCase())
  ))

  return (
    <div>
      <Flex align='center'>
        <input value={inputValue} onChange={onChange}
          onKeyDown={(e) => e.key == 'Escape' && setIsOpen(false)}
          className={css({ color: 'black', p: 1, rounded: 'md' })} />
        <LuChevronsUpDown
          className={css({ cursor: 'pointer', mx: 2 })}
          onClick={() => setIsOpen((val) => !val)} />
        <p>{inputValue}</p>
      </Flex>
      {isOpen && (
        <div
          className={css({ bg: 'gray.800', display: 'inline-block', p: 1, my: 2,
            rounded: 'md', pos: 'absolute', maxH: '20rem', overflow: 'auto' })}>
          {filtered.map((item, ind) => (
            <div key={ind}
              className={css({ maxWidth: '10rem', p: 1, rounded: 'md', m: '1.5',
                _hover: { cursor: 'pointer', bg: 'blue.700', color: 'blue.100' } })}
              data-value={ind} onClick={(e) => {
              setInputValue(filtered[ind])
              setIsOpen(false)
            }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}




export default function Combobox() {
  return (
    <div className={css({ m: 4, '& > p': { color: 'slate.400' } })}>
      <Dropdown />
    </div>
  )
}
