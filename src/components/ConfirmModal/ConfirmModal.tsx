import React, { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import Overlay from '../Overlay'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Typography from '../ui/Typography'
import './ConfirmModal.css'

interface ConfirmModalProps {
  title?: string
  children: string
  onConfirm?: () => void
  onCancel?: () => void
}

const ConfirmModal: FC<ConfirmModalProps & WithTranslation> = ({
  title,
  children,
  onConfirm,
  onCancel,
  t,
}) => {
  return (
    <div className='confirm-modal'>
      <div className='confirm-modal__card'>
        <Icon
          type='exclamation-mark'
          initialSize={true}
          fill={'#FF9F43'}
        ></Icon>
        {title && (
          <Typography type='heading' className='confirm-modal__title'>
            {title}
          </Typography>
        )}
        <Typography type='text' className='confirm-modal__text'>
          {children}
        </Typography>
        <div className='confirm-modal__button-group'>
          <Button size='large' onClick={onConfirm}>
            {t('yesDelete')}
          </Button>
          <Button theme='ghost-danger' size='large' onClick={onCancel}>
            {t('cancel')}
          </Button>
        </div>
      </div>
      <Overlay></Overlay>
    </div>
  )
}

export default withTranslation()(ConfirmModal)
