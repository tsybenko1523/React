import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import React, { Component, Link } from "react";

export default class Blog extends Component {
    blogs = [
        {title: 'Публікація в блозі про Інтернет', text: `Інтернет — всесвітня система сполучених комп'ютерних мереж, що заснована на комплекті Інтернет-протоколів.
        Інтернет також називають мережею мереж, бо він складається з мільйонів локальних і глобальних приватних,
        публічних, академічних, ділових і урядових мереж, пов'язаних між собою з використанням різноманітних дротових,
        оптичних і бездротових технологій. Міжмережжя становить фізичну основу для розміщення величезної кількості
        інформаційних ресурсів і послуг, як-от взаємопов'язані гіпертекстові документи Всесвітнього павутиння
        (World Wide Web — WWW) та електронна пошта.`, date: new Date(2023, 5, 3)},
        {title: 'Публікація в блозі про Microsoft Excel', text: `Microsoft Excel (повна назва Microsoft Office Excel) — табличний процесор, програма для роботи з електронними таблицями, 
        створена корпорацією Microsoft для Microsoft Windows, Windows NT і macOS.
        Програма входить до складу офісного пакета Microsoft Office.`, date: new Date(2023, 1, 8)},
        {title: 'Публікація в блозі про зарядний пристрій', text: `Зарядний пристрій (ЗП) — пристрій для заряджання електричних акумуляторів енергією зовнішнього джерела, 
        зазвичай — від мережі змінного струму напругою 100–240 Вольт. Зазвичай містить перетворювач напруги 
        (трансформатор, імпульсний блок живлення), випрямляч, стабілізатор напруги, пристрій підтримання 
        сили струму або процесу заряджання, амперметр чи світлодіодні індикатори.`, date: new Date(2023, 7, 10)}
    ];

    sort1() {
        this.blogs.sort((blog1, blog2) => {
            if (blog1.date > blog2.date)
                return 1;
            if (blog1.date < blog2.date)
                return -1;   
            return 0; 
        });
    }

    sort2() {
        this.blogs.sort((blog1, blog2) => {
            if (blog1.date < blog2.date)
                return 1;
            if (blog1.date > blog2.date)
                return -1;   
            return 0; 
        });
        //useState(0);
    }

    render() {
        return (
            <Container>
                <a href="#" onClick = {()=>this.sort1()}>Дата ↑</a>  
                <a href="#" onClick = {()=>this.sort2()}>Дата ↓</a> 
               
                <Row>
                    <Col md="9">
                        {this.blogs.map(blog=>(
                            <div className="d-flex align-items-center me-5">
                                <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                                        alt="photo" />
                                    <div className="flex-grow-1 ms-3">  
                                        <h5>{blog.title}</h5>
                                        <h6>{blog.date.getDate()+'-'+blog.date.getMonth()+'-'+blog.date.getFullYear()}</h6>
                                        <p>{blog.text}</p>
                                    </div>
                            </div>
                        ))}                           
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>категорія 1</ListGroup.Item>
                                    <ListGroup.Item>категорія 2</ListGroup.Item>
                                    <ListGroup.Item>категорія 3</ListGroup.Item>                          
                                </ListGroup>
                            </Card>
                            {/* <Card className="mt-3 bg-light">
                                <Card.Body>
                                    <Card.Title>Slide widget</Card.Title>
                                    <Card.Text>
                                        Lorem
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}
