import companyLogo from '../resource/img/logo1.png';
import programLogo from '../resource/img/logo2.png';
import {
    CaretDownOutlined,
    CaretRightOutlined,
    CheckCircleFilled,
    DeleteOutlined,
    FileTextOutlined,
    FilterOutlined,
    FolderOpenOutlined,
    LayoutOutlined,
    LeftOutlined,
    LockOutlined,
    PlusOutlined,
    PrinterOutlined,
    QuestionOutlined,
    RedoOutlined,
    RightOutlined,
    SaveOutlined,
    ScissorOutlined,
    SearchOutlined,
    SlidersOutlined,
    SwapLeftOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Input} from "antd";
import Contents from "../component/Contents";

export default function Dashboard() {


    return (
        <>
            <div style={{height: 70, width: '100%', padding: 13, textAlign: 'center'}}>

                <img src={programLogo} height={'100%'} alt="companyLogo" style={{float: 'left'}}/>

                <span style={{
                    width: 250,
                    height: '100%',
                    display: 'inline-block',
                    backgroundColor: 'lightGray',
                    paddingLeft: 15
                }}>

                <div style={{float: 'left', width: 50, height: '100%', paddingTop: 10}}>
                    <LockOutlined style={{fontSize: 20, marginRight: 6}}/><CheckCircleFilled
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
                <span src={companyLogo} height={'100%'} alt="companyLogo" style={{float: 'right'}}><UserOutlined style={{color : '#099e53', fontSize : 28, padding :3}} /> beom21c<CaretDownOutlined style={{paddingRight : 20}} /></span>
            </div>

            <div style={{height: 44, width: '100%'}}>
                <div style={{fontSize: 20, float: 'left'}}>
                  <span style={{borderRight: '1px solid black',}}>
                    <LayoutOutlined style={{paddingLeft: 5}}/>
                    <CaretDownOutlined style={{fontSize: 10, marginBottom: 20, paddingRight: 5}}/>
                    <SlidersOutlined style={{paddingRight: 5}}/>
                  </span>
                    <span style={{borderRight: '1px solid black'}}>
                    <PlusOutlined style={{paddingRight: 5, paddingLeft: 5}}/>
                    <FolderOpenOutlined style={{paddingRight: 5}}/>
                    <SaveOutlined style={{paddingRight: 5}}/>
                    </span>
                    <span style={{borderRight: '1px solid black'}}>
                    <ScissorOutlined style={{paddingRight: 5, paddingLeft: 5}}/>
                    <FileTextOutlined style={{paddingRight: 5}}/>
                    <DeleteOutlined style={{paddingRight: 5}}/>
                            </span>
                    <span style={{borderRight: '1px solid black'}}>
                    <SwapLeftOutlined style={{paddingRight: 5, paddingLeft: 5}}/>
                    <RedoOutlined style={{paddingRight: 5}}/>
                            </span>
                    <span style={{borderRight: '1px solid black'}}>
                    <PrinterOutlined style={{paddingRight: 5, paddingLeft: 5}}/>
                            </span>
                    <QuestionOutlined style={{paddingLeft: 5}}/>
                </div>

                <div style={{float: 'right', width: 200}}><SearchOutlined
                    style={{float: "right", fontSize: 22, padding: 5}}/> <Input placeholder={'Search'}
                                                                                style={{float: "right", width: 165}}/>
                </div>
            </div>
            <div style={{height : 27, width : '100%', backgroundColor: '#099e53', paddingTop: 2, color: 'white'}}>
                <LeftOutlined/>
                <RightOutlined />
                server1 <CaretRightOutlined /> Reports <CaretRightOutlined /> Production Reports <CaretRightOutlined /> Trend Log Comparison


                <FilterOutlined style={{float : 'right', fontSize : 22}} />
            </div>




            <div>
                <Contents/>
            </div>
        </>
    )

}