import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders content', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const component = await page.find('my-component');
    const obj = [{
      value:"Value 1", label:"label 1"
    },
    {
      value:"Value 2", label:"label 2"
    }];
    await component.setProperty('complexObj', obj);
    await page.waitForChanges();

    const element = await page.find('my-component >>> div');
    console.log("Element", element)
    expect(element).not.toBeNull();
  });
});
