import PropTypes from 'prop-types';

export const LayoutableProps = {
	/**
   * Invoked on mount and layout changes with:
   *
   * `{nativeEvent: { layout: {x, y, width, height}}}`
   *
   * This event is fired immediately once the layout has been calculated,
   * but the new layout may not yet be reflected on the screen
   * at the time the event is received, especially if a layout animation is in progress.
   *
   * @param {Object} evt - Layout event data
   * @param {number} evt.nativeEvent.x - The position X of component
   * @param {number} evt.nativeEvent.y - The position Y of component
   * @param {number} evt.nativeEvent.width - The width of component
   * @param {number} evt.nativeEvent.hegiht - The height of component
   */
  onLayout: PropTypes.func,
}

export const DefaultLayoutableProps = {
	onLayout: () => false,
}


export const ClickableProps = {
  /**
   * Called when the touch is released.
   */
  onClick: PropTypes.func,

  /**
   * Called when the touch with longer than about 1s is released.
   */
  onLongClick: PropTypes.func,
}

export const DefaultClickableProps = {
	onClick: () => false, // 默认支持冒泡
	onLongClick: () => false // 默认支持冒泡
}

export const TouchableProps = {

  /**
   * The touchdown event occurs when the user touches an component.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchDown: PropTypes.func,

  /**
   * The touchmove event occurs when the user moves the finger across the screen.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchMove: PropTypes.func,

  /**
   * The touchend event occurs when the user removes the finger from an component.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchEnd: PropTypes.func,

  /**
   * The touchcancel event occurs when the touch event gets interrupted.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchCancel: PropTypes.func,
}

// 默认支持冒泡
export const DefaultTouchableProps = {
	onTouchDown: () => false,
	onTouchMove: () => false,
	onTouchEnd: () => false,
	onTouchCancel: () => false,
}

export const DefaultEventProps = {
	...DefaultClickableProps,
	...DefaultLayoutableProps,
	...DefaultTouchableProps,
}

export const EventProps = {
	...ClickableProps,
	...LayoutableProps,
	...TouchableProps,
}