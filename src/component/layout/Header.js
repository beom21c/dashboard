import programLogo from "../../resource/img/logo2.png";
import {
    CaretDownOutlined, CaretRightOutlined,
    CheckCircleFilled,
    DeleteOutlined,
    FileTextOutlined, FilterOutlined,
    FolderOpenOutlined,
    LayoutOutlined, LeftOutlined,
    LockOutlined,
    PlusOutlined,
    PrinterOutlined,
    QuestionOutlined,
    RedoOutlined, RightOutlined,
    SaveOutlined,
    ScissorOutlined,
    SearchOutlined,
    SlidersOutlined,
    SwapLeftOutlined,
    UserOutlined
} from "@ant-design/icons";
import companyLogo from "../../resource/img/logo1.png";
import {Input} from "antd";
import {HeaderContainer, IconDivider, NavigateBox} from "../../resource/styled/header";
import '../../resource/css/header.css';

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <img src={programLogo} height={'100%'} alt="companyLogo" style={{float: 'left'}}/>

                <span style={{
                    width: 250,
                    height: '100%',
                    display: 'inline-block',
                    backgroundColor: 'lightGray',
                    paddingLeft: 15
                }}>

                <div style={{float: 'left', width: 50, height: '100%', paddingTop: 10}}>
                    <LockOutlined style={{fontSize: 20, marginRight: 6}}/>
                    <CheckCircleFilled
                        style={{fontSize: 20, color: 'green'}}/>
                </div>
                <div style={{
                    float: 'right',
                    width: 'calc(100% - 50px)',
                    height: '100%',
                    textAlign: 'left',
                    paddingLeft: 10
                }}>Connected to : Server 1
                    <br/>
                    Database mode: On
                </div>
                </span>


                <img src={companyLogo} height={'100%'} alt="companyLogo" style={{float: 'right'}}/>
                <span src={companyLogo} height={'100%'} alt="companyLogo" style={{float: 'right'}}><UserOutlined
                    style={{color: '#099e53', fontSize: 28, padding: 3}}/> beom21c<CaretDownOutlined
                    style={{paddingRight: 20}}/></span>
            </HeaderContainer>

            <div style={{height: 44, width: '100%'}}>
                <div style={{fontSize: 20, float: 'left'}}>
                    <IconDivider>
                        <LayoutOutlined className={'icons'}/>
                        <CaretDownOutlined style={{fontSize: 10, marginBottom: 20, paddingRight: 5}}/>
                        <SlidersOutlined className={'icons'}/>
                    </IconDivider>
                    <IconDivider>
                        <PlusOutlined className={'side_icons'}/>
                        <FolderOpenOutlined className={'icons'}/>
                        <SaveOutlined className={'icons'}/>
                    </IconDivider>
                    <IconDivider>
                        <ScissorOutlined className={'side_icons'}/>
                        <FileTextOutlined className={'icons'}/>
                        <DeleteOutlined className={'icons'}/>
                    </IconDivider>
                    <IconDivider>
                        <SwapLeftOutlined className={'side_icons'}/>
                        <RedoOutlined className={'icons'}/>
                    </IconDivider>
                    <IconDivider>
                        <PrinterOutlined className={'side_icons'}/>
                    </IconDivider>
                    <QuestionOutlined className={'icons'}/>
                </div>

                <div style={{float: 'right', width: 200}}><SearchOutlined
                    style={{float: "right", fontSize: 22, padding: 5}}/> <Input placeholder={'Search'}
                                                                                style={{float: "right", width: 165}}/>
                </div>
            </div>


            {/*navigation*/}
            <NavigateBox>
                <LeftOutlined/>
                <RightOutlined/>
                server1 <CaretRightOutlined/> Reports <CaretRightOutlined/> Production
                Reports <CaretRightOutlined/> Trend Log Comparison
                <FilterOutlined style={{float: 'right', fontSize: 22}}/>
            </NavigateBox>
        </>
    )
}