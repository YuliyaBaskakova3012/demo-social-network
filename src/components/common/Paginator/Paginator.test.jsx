import React  from 'react';
import Paginator from './Paginator';
import {create} from 'react-test-renderer';
describe('Paginator componenr tests', ()=>{
 test('pages count is 11 but should be shown only 10', ()=>{
     const component=create(<Paginator totalItemsCount={11} pageSize={10} portionSize={10}/>);
     const root=component.root;
     let spans=root.findAllByType('span');
     expect(spans.length).toBe(10);
 })
 test('if pages count is more then 10 button NEXT should be present', ()=>{
    const component=create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
    const root=component.root;
    let button=root.findAllByType('button');
    expect(button.length).toBe(1);
})
})