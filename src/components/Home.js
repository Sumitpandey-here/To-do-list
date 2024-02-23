import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const [inputdata, setinputdata] = useState('');
  const [item, setitem] = useState([]);
  const [edit, setedititem] = useState('');
  const [button, buttonstate] = useState('ADD');

  const additem = () => {

    if (button == 'EDIT') {
      setitem(item.map((elly, indexdata) => {

        
        if (indexdata == edit) {


          return [...elly, inputdata]
        }
        return elly;

      })


      )
      buttonstate('ADD');
      setinputdata('');
    } else {
      setitem([...item, inputdata]);
      setinputdata('')

    }
  }


  const deleteitem = (id) => {

    const updateddata = item.filter((newindex, inde) => {
      return inde !== id;

    });

    setitem(updateddata);
  }

  const edititem = (id) => {

    let newedititem = item.filter((newid, index) => {


      return index == id;
    });
    // console.log(newedititem)

    setinputdata(newedititem);
    setedititem(id);
    buttonstate('EDIT');

  }
  return (
    <>
      <div className='container_new'>
        <div >
          <h1>TO DO LIST </h1>
        </div>

        <div>
          <input className='input_css' type='text' placeholder='add item...' value={inputdata} onChange={(e) => setinputdata(e.target.value)} />
        </div>

        <div className='butto_css'>
          <button className='btnwuqhj' onClick={additem}>{button}</button>
        </div>

        {item.map((newindex, inde) => {
          return (
            <div className='show_content'>
              <div className='task' key={inde}>{newindex}</div>
              <div className='joint_btn'>
                <div>
                  <button className='btnwuqhj' onClick={() => deleteitem(inde)}>Delete</button>
                </div>
                <div >
                  <button className='btnwuqhj' onClick={() => edititem(inde)}>Edit</button>
                </div>
              </div>
            </div>
          )

        })
        }


      </div>
    </>
  )
}

export default Home
