import Style from './index.module.scss';
import ReactAA  from '../../routes/index.js';
import NavItems from '../../components/navItems';


const Content = () => {
    const { reactBasic } = ReactAA.myReact;
    return <div className="content">
            <div className={`${Style.learnContainer} ${Style['color-1']}`}>
                <NavItems routes = {reactBasic} />
            </div>
            <div className={`${Style.learnContainer} ${Style['color-2']}`}></div>
            <div className={`${Style.learnContainer} ${Style['color-3']}`}></div>
         </div>
}

export default Content;