import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import tsIcon from "../../assets/ts.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import gitIcon from "../../assets/git.png";
import tailwindIcon from "../../assets/tailwind.png";
import muiIcon from "../../assets/mui.png";
import mysqlIcon from "../../assets/mysql.png";
import firebaseIcon from "../../assets/firebase.png";

const style: string = "rounded-xl bg-iconBkg contrast-50 p-3";
const style2: string =
  "rounded-xl border border-2 border-iconBkg contrast-50 p-3";
const small: string = "w-12 h-12 z-0";
const medium: string = "w-16 h-16 z-10";
const large: string = "w-20 h-20 z-20";

interface FlexProps {
  children: React.ReactNode;
}
const Flex = ({ children }: FlexProps) => {
  return (
    <div className="flex items-center w-full h-full select-none">
      {children}
    </div>
  );
};

const BkgIcons = () => {
  return (
    <div className="flex flex-col h-full">
      <Flex>
        <div className={`${style} ${large}`}></div>
        <div className={`${style} ${large}`}>
          <img src={jsIcon} className="rounded-md" />
        </div>
        <img src={htmlIcon} className={`${style} ${small}`} />
      </Flex>

      <Flex>
        <img src={gitIcon} className={`${style} ${medium}`} />
        <img src={tailwindIcon} className={`${style} ${large}`} />
        <img src={muiIcon} className={`${style} ${medium}`} />
        <img src={reactIcon} className={`${style} ${large}`} />
      </Flex>

      <Flex>
        <div className={`${style} ${small}`}></div>
        <img src={mysqlIcon} className={`${style} ${medium}`} />
        <div className={`${style2} ${small}`}></div>
        <img src={cssIcon} className={`${style} ${small}`} />
      </Flex>

      <Flex>
        <img src={tsIcon} className={`${style} ${large}`} />
        <img src={firebaseIcon} className={`${style} ${medium}`} />
      </Flex>
    </div>
  );
};

export default BkgIcons;
