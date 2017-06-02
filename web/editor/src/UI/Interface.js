import Header from './Header'
import Sidebar from './Sidebar'

class Interface {

    constructor () {
        this.header = new Header()
        this.sidebar = new Sidebar()
    }

    toView() {
        return {
            header: this.header.toView(),
            sidebar: this.sidebar.toView()
        }
    }
}

export default Interface
