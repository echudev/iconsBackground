import js from '../../assets/js.png'
import react from '../../assets/react.png'
import ts from '../../assets/ts.png'
import htm from '../../assets/html.png'
import css from '../../assets/css.png'
import git from '../../assets/git.png'
import tlwnd from '../../assets/tailwind.png'
import mui from '../../assets/mui.png'
import msql from '../../assets/mysql.png'
import fbse from '../../assets/firebase.png'
import mgo from '../../assets/mongo.png'
import gh from '../../assets/gh.png'
import nde from '../../assets/node.png'

const style: string =
  'absolute rounded-xl bg-iconBkg p-3 pointer-events-none transition-transform ease-out duration-[3000ms]'
const style2: string =
  'absolute rounded-xl border border-4 border-iconBkg p-3 pointer-events-none transition-transform ease-out duration-[3000ms]'
const small2: string = 'w-12 h-12 z-0 opacity-20'
const small3: string = 'w-12 h-12 z-0 opacity-10'
const medium: string = 'w-16 h-16 z-10 opacity-30'
const medium2: string = 'w-16 h-16 z-10 opacity-10'
const large: string = 'w-20 h-20 z-20 opacity-30'

interface BkgIconsProps {
  iconTransformX: {
    slow: number
    normal: number
    fast: number
  }
  iconTransformY: {
    slow: number
    normal: number
    fast: number
  }
}

const BkgIcons = ({ iconTransformX, iconTransformY }: BkgIconsProps) => {
  return (
    <div className="absolute w-full h-full bg-repeat z-40 overflow-hidden">
      <div className="flex w-full h-full select-none">
        <img
          src={js}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[7%] left-[22%]`}
        />
        <img
          src={htm}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[33%] left-[10%]`}
        />
        <img
          src={git}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[50%] left-[95%]`}
        />
        <img
          src={ts}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[52%] left-[14%]`}
        />
        <img
          src={mui}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[68%] left-[2%]`}
        />
        <img
          src={react}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[75%] left-[80%]`}
        />
        <img
          src={mgo}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[65%] left-[35%]`}
        />
        <img
          src={css}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${large} top-[24%] left-[36%]`}
        />
        <img
          src={gh}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[16%] left-[77%]`}
        />
        <img
          src={fbse}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[34%] left-[82%]`}
        />
        <img
          src={msql}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[17%] left-[60%]`}
        />
        <img
          src={nde}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[60%] left-[58%]`}
        />
        <img
          src={tlwnd}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[32%] left-[60%]`}
        />
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[80%] left-[25%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[17%] left-[18%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[5%] left-[24%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[40%] left-[75%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[72%] left-[75%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[50%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[75%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[45%] left-[35%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[55%] left-[45%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[10%] left-[70%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[60%] left-[15%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[35%] left-[26%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[72%] left-[55%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[40%] left-[61%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[30%] left-[40%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[3%] left-[44%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[-3%] left-[64%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium} top-[10%] left-[97%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[30%] left-[90%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[80%] left-[-5%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[13%] left-[3%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium} top-[49%] left-[5%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium} top-[60%] left-[95%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[56%] left-[80%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium} top-[26%] left-[106%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[40%] left-[102%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[29%] left-[-5%]`}></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium} top-[43%] left-[-10%]`}></div>
      </div>
    </div>
  )
}

export default BkgIcons
