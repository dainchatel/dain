import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader/root'

export const App = hot(_App)
export function _App(): JSX.Element | null {
  return (
    <Fragment>
    <header>Dain chatel</header>
    <main>
      <section>
        <article>
          <h2>writing</h2>
          <ul>
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </article>
        <article>
          <h2>coding</h2>
          <ul>
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </article>
        <article>
          <h2>contact</h2>
          <ul>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </article>
      </section>
    </main>
    <footer>i own this</footer>
    </Fragment>
  )
}