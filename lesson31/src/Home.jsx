import { useSelector, useDispatch } from "react-redux";
import { setHomeText } from "./store/actions/home.action"

const getTitle = state => state.home.title;
const getText = state => state.home.text;

const Home = () => {
	const title = useSelector(getTitle);
	const text = useSelector(getText);
	const dispatch = useDispatch();

	return (
		<section>
			<h1>{title}</h1>
			<div>
				<textarea
					value={text}
					onChange={e => {
						dispatch(setHomeText(e.target.value))
					}}
					rows={10}
					cols={40}
				/>
			</div>
		</section>
	);
}

export default Home;