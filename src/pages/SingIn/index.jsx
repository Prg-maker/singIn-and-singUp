import styles from './styles.module.scss'

import {Input} from '../../components/input'

export function SingIn(){
  return(

    <div className={styles.singUpWrapperContainer}>
      <div className={styles.main}>
        <p> Welcome back !!!</p>

        <h2>Sing In</h2>

        <form action="">


            <label for="name">Name</label>
          <Input
            type="name"
            placeholder="Name"
          />

          <label for="email">email</label>  
          <Input
            type="email"
            placeholder="email"
          />

          <label for="password">password</label>  
          <Input
            type="password"
            placeholder="password"
          />
          <div className={styles.button}>
            <button>Register</button>
          </div>

        </form>
        <footer>
          <p >I don't have an account? <a href="/">Sign up</a></p>

        </footer>

      </div>
    </div>
  )
}