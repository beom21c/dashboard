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
import LeftMenu from "../component/LeftMenu";
import Header from "../component/layout/Header";

export default function Dashboard() {


    return (
        <>
            <Header/>
            <LeftMenu/>
            <Contents/>
        </>
    )

}