import SiderStyle from './index.module.scss';

const Sider = () => {
    return <div className="sider">
                <div className={SiderStyle.avatar}></div>
                <div className={SiderStyle.skillPanel}></div>
         </div>
}

export default Sider;