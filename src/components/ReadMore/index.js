import {useState} from 'react'

import {
  MainBgCont,
  MainHead,
  MainPara,
  MainImg,
  Description,
  ChangeButton,
} from './styledComponents'

const ReadMore = props => {
  const [readLess, changeReadButton] = useState(false)
  const {reactHooksDescription} = props

  const displayedText = readLess
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const switchButton = readLess ? 'Read Less' : 'Read More'

  const onClickChangeButton = () => {
    changeReadButton(prevState => !prevState)
  }

  return (
    <MainBgCont>
      <MainHead>React Hooks</MainHead>
      <MainPara>Hooks are a new addition to React</MainPara>
      <MainImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{displayedText}</Description>
      <ChangeButton type="button" onClick={onClickChangeButton}>
        {switchButton}
      </ChangeButton>
    </MainBgCont>
  )
}

export default ReadMore
