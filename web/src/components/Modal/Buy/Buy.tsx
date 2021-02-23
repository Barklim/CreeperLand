import React, { useEffect, useState } from 'react';
import { icons, IconType } from 'components/Card/icons';
import {
  Backdrop,
  Wrap,
  XButton,
  BuyTitle,
  Content,
  Left,
  RightHtmlContent,
  Icon,
  Name,
  BottomForm,
  Inputs,
  Input,
  Label,
  Button,
  LabelElement,
} from './styles';

export interface BuyProps {
  icon: IconType;
  name: string;
  description: string;
  title: string;
  price: string;
  show: boolean;
  onClose: () => void;
  onSuccess?: (body: { promo: string | null; nickname: string }) => void;
}

const Buy: React.FC<BuyProps> = ({
  icon,
  name,
  description,
  title,
  price,
  show,
  onClose,
  onSuccess,
}) => {
  const [nickname, setNickname] = useState<string>('');
  const [promo, setPromo] = useState<string>('');

  useEffect(() => {
    setNickname('');
    setPromo('');
  }, [show]);

  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onPromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromo(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname.length) return;

    if (onSuccess) {
      onSuccess({
        nickname,
        promo: promo.length > 0 ? promo : null,
      });
    }
  };

  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <Wrap show={show}>
        <XButton onClick={onClose} />

        <BuyTitle>{title}</BuyTitle>
        <Content>
          <Left>
            <Icon {...icons[icon]} />
            <Name>{name}</Name>
          </Left>

          <RightHtmlContent
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Content>
        <BottomForm onSubmit={submitHandler}>
          <Inputs>
            <LabelElement>
              <Label>Ваш ник:</Label>
              <Input
                placeholder="Ваш ник:"
                required
                onChange={onNicknameChange}
                value={nickname}
              />
            </LabelElement>

            <LabelElement>
              <Label>Промокод:</Label>
              <Input
                placeholder="Промокод:"
                onChange={onPromoChange}
                value={promo}
              />
            </LabelElement>
          </Inputs>

          <Button type="submit">{price}</Button>
        </BottomForm>
      </Wrap>
    </>
  );
};

export default Buy;
