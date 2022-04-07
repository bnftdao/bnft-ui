
import { MotionButton, MotionFlex } from '../../../../components/common/motion-components'
import { Text } from 'theme-ui'
interface IButton {
    backgroundColor?: string
    text: string
    arrowColor?: string
    outlined?: boolean
    sx?: any
    onClick?: () => {},
}

export const Button: React.FC<IButton> = ({ backgroundColor, text, arrowColor, outlined, sx, onClick }, ...restprops) => {

  return (
    <MotionButton 
      onClick={onClick}
      sx={{ 
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
        height: 56,
        width: '100%',
        maxWidth: 454,
        border: outlined ? '1px solid white' : '0px',
        ":hover": { opacity: 0.6, transition: 'ease-in-out 0.3s', cursor: 'pointer'},
        ...sx
      }}
      {...restprops}
      >
      <MotionFlex sx={{ width: '100%', justifyContent: 'space-between', px: 10, alignItems: 'center'}}>
        <Text color={outlined ? 'white' : 'blue.100'} variant='styles.body'>{text}</Text>
        <Text sx={{ fontSize: 30, fontWeight: 'bold'}} color={outlined ? 'white' : arrowColor ? arrowColor : 'blue.100'}>&#x2192;</Text>
      </MotionFlex>
    </MotionButton>   

  )
}