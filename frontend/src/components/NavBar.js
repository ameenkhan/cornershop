import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const NavBar = () => (
	<Menu mode="horizontal" theme="dark">
		<Menu.Item key="1">
			<Link to="/about">About Us</Link>
		</Menu.Item>
			<Menu.Item key="2">
				<Link to="/halal">Halal</Link>
			</Menu.Item>
			<Menu.Item key="3">
				<Link to="/order-meat">Order Meat</Link>
			</Menu.Item>
			<Menu.Item key="4">
				<Link to="/contact">Contact Us</Link>
			</Menu.Item>
	</Menu>
)



export default NavBar;