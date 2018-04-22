import { PureComponent } from 'react'

export default class BasePureComponent extends PureComponent {
  _bind(...methods) {
    methods.forEach(method => (this[method] = this[method].bind(this)))
  }
}
