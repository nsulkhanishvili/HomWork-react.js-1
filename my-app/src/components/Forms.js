
import { useState } from 'react';
import Button from "./Button";

export default function Forms() {
    
    const [inputValue, setInputValue] = useState ('');

    function submit(e) {
        e.preventDefault();
        alert(inputValue);
    }
    function ChangeTitle(){
        setInputValue(inputValue)
    }
    return(
        <section>
            <form onSubmit={submit} >
                <div className="DivInput">
                    <label htmlFor="namedInput">Rooms</label>
                    <input 
                        id="namedInput" 
                        type="text" 
                        placeHolder="rooms"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <Button  onClick={ChangeTitle} text="submit" className="btn"/>

            </form>
        </section>
    )
}