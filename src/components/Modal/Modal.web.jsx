import React from 'react';
import Rodal from 'rodal';
import { View } from '@hippy/react';

import { ISWEB } from '../../utils';
import { modalPropTypes, modalDefaultProps } from './props';
import { styles } from './styles';
import { stopPropagation } from '../../utils/event';

// 根据平台动态加载，否则在hippy里面直接引入css文件，会报错
// TODO 做成配置，webpack配置，或者统一入口
if (ISWEB) require('rodal/lib/rodal.css');

const animationTypeMap = {
	slide: 'slideUp',
	fade: 'fade',
}

/**
 * click mask 通过onClose来执行，有一定风险，rodal监听到键盘也会调用onclose
 */
export class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.handleMaskClick = this.handleMaskClick.bind(this);
	}
	handleMaskClick (event) {
		const { onMaskClick } = this.props;
		onMaskClick(event);
		return stopPropagation(event);
	}
	render () {
		const {
			children,
			visible,
			transparent,
			animated,
			animation,
			maskStyle,
			style,
		} = this.props;
		return (
			<Rodal
				visible={visible}
				width={100}
				height={100}
				measure={'%'}
				customStyles={{ backgroundColor: 'transparent', padding: 0, justifyContent: 'center', alignItems: 'center' }}
				showMask={false}
				customMaskStyles={styles.mask}
				showCloseButton={false}
				duration={animated ? 300 : 0}
				closeMaskOnClick={false}
				animation={animationTypeMap[animation] || 'fade'}
				onClose={() => {}}
			>
				<View
					style={[ styles.mask, transparent ? { backgroundColor: 'transparent' } : {}, maskStyle, style ]}
					onClick={this.handleMaskClick}
				>
						{ children }
				</View>
			</Rodal>
		);
	}
}

Modal.propTypes = modalPropTypes
Modal.defaultProps = modalDefaultProps;

export default Modal;
