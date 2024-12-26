// Create a simple button component
import styles from './Button.module.css';
import Author from "../../Author";

export default function ButtonAmadu() {
    return(
        <div>
            <button className = {styles.btn} >Click Here</button>
            <p>
                Hi! my name is Amadu S Camara this is my first component.
            </p>
            <pre className='styles.codeBlock'>
                <code>
                    
                </code>

            </pre>

            <Author name="Amadu Sadjo Camara" githubLink="https://github.com/amadusadjocamara" />;
        </div>

    );
  }
  