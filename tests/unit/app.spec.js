import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import HelloWorld from '@/components/HelloWorld'

describe('App.vue', () => {
  it('contains HelloWorld ❌', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.contains(HelloWorld)).toBe(true)
  })

  it('contains HelloWorld ✅', async done => {
    const wrapper = await shallowMount(App)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.contains(HelloWorld)).toBe(true)
      done()
    })
  })
})
