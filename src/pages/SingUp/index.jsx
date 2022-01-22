import { Input } from '../../components/input'
import styles from './styles.module.scss'

export function SingUp(){
  return(

    <div className={styles.singUpWrapperContainer}>
      <div className={styles.main}>
        <p>Welcome!!</p>

        <h2>Sing up</h2>

        <form action="">
          <label for="name">Name</label>
          <Input
            type="name"
            placeholder="Name"
          />


          <label for="email">Email</label>
          <Input
            type="email"
            placeholder="Email"
          />
          <label for="password">password</label>
          <Input
            type="password"
            placeholder="Password"
          />
          <div className={styles.button}>
            <button>Register</button>
          </div>

        </form>
        <footer>
          <p >I have an account? <a href="/sing-in">Sign in</a></p>

        </footer>

      </div>
    </div>
  )
}