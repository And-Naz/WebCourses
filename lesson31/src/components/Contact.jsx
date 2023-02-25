import { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { getContactUsers } from "../store/actions/contact.action"

const getUsers = state => state.contact.users;

const Contact = ({
	users,
	dispachedGetContactUsers,
	id
}) => {
	// const dispatch = useDispatch();
	// const users = useSelector(getUsers);
	// const dispachedGetContactUsers = () => dispatch(getContactUsers())

	useEffect(() => {
		dispachedGetContactUsers()
	}, [])
	
	return (
		<section>
			<h1>Contact</h1>
			<table border="1">
				<thead>
					<tr>
						<td>Username</td>
						<td>Email</td>
						<td>Phone</td>
					</tr>
				</thead>
				<tbody>
					{
						users.map(user => {
							return (
								<tr key={user.id}>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</section>
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.contact.users /* getUsers() */
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispachedGetContactUsers: () => {
			dispatch(getContactUsers())
		}
	}
}

const mergeProps = null
const options = {}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Contact);