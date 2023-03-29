import jsIcon from '../../assets/js.png'
import reactIcon from '../../assets/react.png'
import tsIcon from '../../assets/ts.png'
import htmlIcon from '../../assets/html.png'
import cssIcon from '../../assets/css.png'
import gitIcon from '../../assets/git.png'
import tailwindIcon from '../../assets/tailwind.png'
import muiIcon from '../../assets/mui.png'
import mysqlIcon from '../../assets/mysql.png'
import firebaseIcon from '../../assets/firebase.png'

interface IconProps {
  source: string
}
const Icon = ({ source }: IconProps) => {
  return (
        <img src={source} alt={`${source}-icon`} className="w-16 h-16 m-10 rounded-xl bg-slate-500 saturate-50 p-3" />
  )
}

const BkgIcons = () => {
  return (
    <div className="container relative border flex justify-center flex-wrap mt-10 select-none" >
    <Icon source={jsIcon} />
    <Icon source={reactIcon} />
    <Icon source={tsIcon} />
    <Icon source={htmlIcon} />
    <Icon source={cssIcon} />
    <Icon source={gitIcon} />
    <Icon source={tailwindIcon} />
    <Icon source={muiIcon} />
    <Icon source={mysqlIcon} />
    <Icon source={firebaseIcon} />
    </div>
  )
}

export default BkgIcons
