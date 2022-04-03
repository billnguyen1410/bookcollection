import React, {useState} from 'react';


function Form() {

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    return (
        <div>
            <h1> Book Collection </h1>
            {submitting && <div> Submitting Form... </div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p> Name of the book </p>
                        <input name="name" />
                    </label>
                    <lable>
                        <p> Category </p>
                        <input name="category" />
                    </lable>
                </fieldset>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Form;