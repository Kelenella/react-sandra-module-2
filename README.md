# react-sandra-module-2
react-35-module-2
class extends Component render()
import { Component } from 'react'

state = {}
this.state - Object

this.setState({})

this.setState((prevState)=>{ return {prop: prevState.prop + 1} }) || this.setState((prevState)=>({prop: prevState.prop + 1}))

state = {prop: this.props.value}
static defaultProps = {prop: 0}

lesson 2
поднятие состояния -
передача методов ребенку через props,
при вызове этих ментодов в ребенке,
состояние будет изменяться в родителе
Где использовать? Например при сабмите формы, чтобы передать родителю готовый объект с данными

Структура компонента формы:

стейт с полями для значений из инпутов
метод обработки ввода данных в инпуты с записью значений в стейт
для чекбокса лучше сделать отдельный метод или прописать условие с проверкой типа на checkbox
  handleCheck = ({ target }) => {
    const { name, value, type, checked } = target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
методы обработки сабмита формы, где вызываем метод родителя, полученный через this.props
метод очистки формы через стейт, потому что поля инпутов (value) связаны с их полями в стейте
рендер JSX-разметки с формой и инпутами: 5.1 label через htmlFor привязываем к input по id. Идентификатор лучше генерировать перед рендером разметки в публичном свойстве и по ссылке присваивать в атрибуты 5.2 input должен иметь:
name со значением, по которому будем хранить его в стейте и обращаться к нему из формы
const { name, value } = target;
this.setState({ [name]: value });
value, сообщающийся с соответствующим полем в стейте
onChange - проп события, в него передаем метод - обработчик события 5.3 для input:radio также нужно:
checked={поле из стейта для чекбокса} 5.4 чтобы деактивировать кнопку по нечекнутому инпуту
disabled={!поле из стейта для чекбокса}
