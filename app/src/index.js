/** @jsx hJSX */
import { Observable } from 'rx'
import Cycle from '@cycle/core'
import {makeDOMDriver, hJSX} from '@cycle/dom'

function main(drivers) {
  return {
    DOM: Observable.timer(0, 1000)
      .map(i => <div>{i} seconds elapsed</div>)
  }
}

const drivers = {
  DOM: makeDOMDriver('#app')
}

Cycle.run(main, drivers)
