import { useContext  } from "react";
import { AppContext } from "./globalState";
import Loading from "./Loading";
import NoData from "./NoData";
import Error from "./Error"
import UserComponent from "./UserComponent"

const Page = () => {
	const contextValue = useContext(AppContext);
	const { loading, error, user } = contextValue.state
	return (
			loading
				? (<Loading />)
				: error
					? (<Error text={error} />)
					: !user
						? (<NoData />)
						: (<UserComponent />)
	)
}

export default Page;