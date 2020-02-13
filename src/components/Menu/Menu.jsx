import React from 'react'
import './menu.css'

const Menu = () => {
	return (
		<section>
			<section className="burger">
				<section className="lines">
					<section className="line" />
					<section className="line" />
					<section className="line" />
				</section>
			</section>
			<section className="menu-container">
				<section className="menu-logo">
					<img className="menu-logo-img" src={require('../assets/logo.img')} alt="logo" />
				</section>
				<section className="menu-title" />
				<a className="menu-github" href="" target="_blank">
					Source Code in Git
				</a>
				<a className="menu-twitter" href="" target="_blank">
					Follow on Twitter
				</a>
			</section>
		</section>
	)
}

export default Menu
