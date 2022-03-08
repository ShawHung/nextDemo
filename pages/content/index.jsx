import Style from './index.module.scss';

const Content = () => {
    return <div className="content">
            <div className={`${Style.learnContainer} ${Style['color-1']}`}></div>
            <div className={`${Style.learnContainer} ${Style['color-2']}`}></div>
            <div className={`${Style.learnContainer} ${Style['color-3']}`}></div>
         </div>
}

export default Content;