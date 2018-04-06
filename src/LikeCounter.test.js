import React from 'react'
import LikeCounter from './LikeCounter'
import { mount, shallow } from 'enzyme'

describe('<LikeCounter />', () => {
	it('render LikeCounter component ', () => {
		const likeCounter = shallow(<LikeCounter />)
		expect(likeCounter).toHaveLength(1)
	})

	it('it render props correctly', () => {
		const likeCounter = shallow(<LikeCounter />)
		expect(likeCounter.props().name).toBe('likeCounter')
	})

	it('it update the like counter on click ', () => {
		const likeCounter = mount(<LikeCounter />)
		const button = likeCounter.find('button')
		button.simulate('click')
		button.simulate('click')
		expect(likeCounter.state().counter).toEqual(2)
	})
});