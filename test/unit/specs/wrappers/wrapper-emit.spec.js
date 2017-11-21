import mount from '~src/mount'
import ComponentWithEvents from '~resources/components/component-with-events.vue'

describe('trigger change on select', () => {

  describe('this works', () => {
    it('causes change handler on select elemnt to fire when wrapper.trigger("change") is called one of its options', () => {
      const wrapper = mount(ComponentWithEvents)

      const select = wrapper.find('select').element
      select.value = '1'
      select.dispatchEvent(new Event('change'))

      expect(wrapper.emitted().input[0][0]).to.equal("1")
    })
  })

  describe('this doesnt work', () => {
    it('causes change handler on select elemnt to fire when wrapper.trigger("change") is called one of its options', () => {
      const wrapper = mount(ComponentWithEvents)
      const button = wrapper.find('select option[value="1"]')
      button.trigger('change')

      expect(wrapper.emitted().input[0][0]).to.equal("1")
    })
  })
})
