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

const iconBaseClass: string = 'w-16 h-16 m-10 rounded-xl bg-iconBkg saturate-50 p-3'
const BkgIcons = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center h-full w-full select-none" >
    <img src={jsIcon} className={`${iconBaseClass}`}/>
    <img src={reactIcon} className={`${iconBaseClass}`}/>
    <img src={tsIcon} className={`${iconBaseClass}`}/>
    <img src={htmlIcon}className={`${iconBaseClass}`} />
    <img src={cssIcon} className={`${iconBaseClass}`}/>
    <img src={gitIcon} className={`${iconBaseClass}`}/>
    <img src={tailwindIcon} className={`${iconBaseClass}`}/>
    <img src={muiIcon} className={`${iconBaseClass}`}/>
    <img src={mysqlIcon} className={`${iconBaseClass}`}/>
    <img src={firebaseIcon} className={`${iconBaseClass}`}/>
    </div>
  )
}

export default BkgIcons
