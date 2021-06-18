import React, { useState } from 'react';

const Form = (props) => {
    const { updateArray } = props;
    const initialInputState = { firstname: "", lastname: "", quantity: "", title: "", klass:""};
    const [values, setValues] = useState(initialInputState);
    const { firstname, lastname, quantity, title, klass} = values;
    console.log(!values.first);
    const handleInputChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        updateArray(values);
    }  

    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    return (
        <section className="TrainWrapper">
            <header>
                <article className="tittle">
                    <h1>ÅKA TÅG</h1>
                </article>
                <section className="åka">
                    <article className="stockholm">
                        <h2>STOCKHOLM</h2>
                        <article>
                            <p>10.30</p>
                        </article>
                    </article>
                    <article className="göteborg">
                        <h2>GÖTEBORG</h2>
                        <article>
                            <p>14.45</p>
                        </article>
                    </article>
                </section>
            </header>
            <article className="format-options" name="klass" value={klass} onChange={handleInputChange}>
                <article className="option-group">
                    <input type="radio" id="html" name="klass" value="2:a klass"/>
                    <label htmlFor="html">2:a klass</label>
                   
                </article>
                <article className="option-group">
                    <input type="radio" id="txt" name="klass" value="1:a klass"/>
                    <label htmlFor="txt">1:a klass</label>
                </article>
            </article>
            <section  className="select">
                <article>
                    <label >Antal biljetter</label>
                    <select id="quantity" name="quantity" form="quantity" value={quantity} onChange={handleInputChange}>
                        <option value="" defaultValue disabled hidden>Choose Tickets</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </article>
                <article>
                    <label >Titel</label>
                    <select id="Titel" name="title" form="Titel" value={title} onChange={handleInputChange}>
                        <option value="" defaultValue disabled hidden>Pref. Honorific</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Miss">Miss</option>
                        <option value="Sir">Sir</option>
                        <option value="Lady ">Lady </option>
                        <option value="Lord">Lord</option>
                    </select>
                </article>
            </section>
            <section className="formContainer">
                <form>
                    <label className="label">Förnamn</label>
                    <input className="inputBig" name="firstname" value={firstname} onChange={handleInputChange} />
                    
                    <label className="label">Efternamn</label>
                    <input className="inputBig" name="lastname" value={lastname} onChange={handleInputChange} />
                    <section className="checkBoxWrapper">
                        <section className="checkBox">
                            <input className="checkBoxInput" type="checkbox" id="checkbox"
                                checked={isChecked}
                                onChange={handleOnChange}
                            />
                            <label htmlFor="checkbox"></label>
                        </section>
                        <label>Godkänner villkoren</label>
                    </section>
                </form>
            </section>
            <button className="bokaButton" onClick={isChecked? handleSubmit: null}>Boka biljetter</button>
        </section>
    );
}

export default Form;
