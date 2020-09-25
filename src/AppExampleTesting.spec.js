import React from 'react';
import AppExampleTesting, {
  doIncrement,
  doDecrement,
  Counter,
} from './AppExampleTesting';

/* 
    Veremos:
    1. Cómo probar la salida renderizada.
    2. Cómo acceder a los props.
    3. Cómo manipular el estado local de un componente.
    4. Cómo simular click
*/
describe('Local State', () => {
  it('Debe incrementar el contador en el estado', () => {
    const state = {counter: 0};
    const newState = doIncrement(state);

    expect(newState.counter).to.equal(1);
  });

  it('Debe decrementar el contador en el estado', () => {
    const state = {counter: 0};
    const newState = doDecrement(state);

    expect(newState.counter).to.equal(-1);
  });
});

/* 
    La función shallow () es una de las tres funciones (shallow, mount, render) que ha hecho accesible globalmente en el archivo test / helpers.js. 
    Shallow es la forma más simple de renderizar un componente con Enzyme. 
    Solo representa el componente, pero no el contenido de los componentes secundarios de este componente. 
    Hace posible probar el componente de forma aislada. 
    Por lo tanto, se puede usar perfectamente para pruebas unitarias de componentes React.
*/
describe('Componente AppExampleTesting', () => {
  /* 
    Verifica si el componente Counter se representa como instancia de componente en el componente AppExampleTesting. 
    De acuerdo con la prueba, solo debe haber un componente Contador.
  */
  it('Renderiza el contenedor(wrapper) Counter', () => {
    const wrapper = shallow(<AppExampleTesting />);
    expect(wrapper.find(Counter)).to.have.length(1);
  });

  /* 
    Afirma si los props se pasan, correctamente, al siguiente componente
  */
  it('Pasa todos los props al contenedor(wrapper) Counter', () => {
    const wrapper = shallow(<AppExampleTesting />);
    let counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.props().counter).to.equal(0);

    wrapper.setState({counter: -1});

    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).to.equal(-1);
  });

  /* 
    Simula click para incrementar el contador
  */
  it('Incrementa el contador', () => {
    const wrapper = shallow(<AppExampleTesting />);

    wrapper.setState({counter: 0});
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state().counter).to.equal(1);
  });

  /* 
    Simula click para decrementar el contador
 */
  it('Decrementa el contador', () => {
    const wrapper = shallow(<AppExampleTesting />);

    wrapper.setState({counter: 0});
    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state().counter).to.equal(-1);
  });
});
