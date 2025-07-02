import Test from '@components/common/Test'

import spiderman from './assets/images/spiderman.png'
import './styles/app.module.css'

function App() {
	return (
		<>
			<div>App</div>
			<Test />
			<div>
				<img src={spiderman} alt="Spiderman" height={300} width={300} />
			</div>
		</>
	)
}
export default App
