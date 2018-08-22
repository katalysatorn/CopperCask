import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
  it('Renders props.brand when passed', () => {
    const brand = 'coppercask-example-message'
    const wrapper = shallowMount(Navbar, {
      propsData: { brand }
    })
    expect(wrapper.text()).to.include(brand)
  })
})
