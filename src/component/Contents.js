import {Button, Card, Input, Select, Tabs} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import {DownCircleOutlined} from "@ant-design/icons";
import { Line } from '@ant-design/charts';
const { Option } = Select;
const {TabPane} = Tabs;
export default function Contents() {

    const initialPanes = [
        {title: 'Tab 1', content: 'Content of Tab 1', key: '1'},
        {title: 'Tab 2', content: 'Content of Tab 2', key: '2'},
        {
            title: 'Tab 3',
            content: 'Content of Tab 3',
            key: '3',
            closable: false,
        },
    ];

    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        point: {
            size: 5,
            shape: 'diamond',
        },
    };
    return (
        <div style={{width: 'calc(100% - 350px)', float: 'right', padding: 10}}>
            <Tabs
                type="editable-card"
                activeKey={'1'}
            >

                {initialPanes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                        <Card style={{width: 800}}>
                            To create a prompted report, type a report name then click Save as. <br/>
                            To create a dashboard report with fixed parameters, type a report name, select Dashboard
                            report, then click Save as. <br/>

                            <div style={{color: 'red', marginTop: 20}}>Report name</div>
                            <Input value={'/Production Reports/'} style={{width: 200}}/>
                            <div style={{paddingTop: 20}}>
                                <Checkbox/> Dashboard report
                            </div>
                            <Button type={'primary'}>Save as</Button>
                        </Card>
                        <Card style={{width: 800}}>
                            <DownCircleOutlined /> Show parameters
                            <Select defaultValue="lucy" style={{ width: 120 }} >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">PDF</Option>
                            </Select>
                            <Button type={'danger'}>Export</Button>

                            <div style={{float : 'right'}}>
                                <Button>Submit For</Button>
                                <Button disabled={true}>Save</Button>
                            </div>
                        </Card>
                    </TabPane>
                ))}
            </Tabs>


            <Card style={{width : 1000}} title={'Trend Log Comparison'}>
                <Line {...config} />
            </Card>
        </div>
    )
}