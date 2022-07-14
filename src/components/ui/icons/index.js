import * as React from 'react';
import Icon from './icon';
import coin from '../../../images/icons/coin.svg';
import heart from '../../../images/icons/heart.svg';
import rocket from '../../../images/icons/rocket.svg';
import graph from '../../../images/icons/graph.svg';
import lamp from '../../../images/icons/lamp.svg';
import clients from '../../../images/icons/clients.svg';
import strong from '../../../images/icons/strong.svg';
import gift from '../../../images/icons/gift.svg';


import tg from '../../../images/icons/telegram.svg';
import tgSolid from '../../../images/icons/telegram-solid.svg';
import vk from '../../../images/icons/vk.svg';
import mail from '../../../images/icons/mail.svg';
import skype from '../../../images/icons/skype.svg';
import twitter from '../../../images/icons/twitter.svg';
import youtube from '../../../images/icons/youtube.svg';
import fb from '../../../images/icons/facebook.svg';
import inst from '../../../images/icons/instagram.svg';



const CoinIcon = ({ isBig }) => <Icon isBig={isBig} icon={coin} />
const HeartIcon = ({ isBig }) => <Icon isBig={isBig} icon={heart} />
const RocketIcon = ({ isBig }) => <Icon isBig={isBig} icon={rocket} />
const GraphIcon = ({ isBig }) => <Icon isBig={isBig} icon={graph} />
const LampIcon = ({ isBig }) => <Icon isBig={isBig} icon={lamp} />
const ClientsIcon = ({ isBig }) => <Icon isBig={isBig} icon={clients} />
const StrongIcon = ({ isBig }) => <Icon isBig={isBig} icon={strong} />
const GiftIcon = ({ isBig }) => <Icon isBig={isBig} icon={gift} />

const TgIcon = ({ isBig }) => <Icon isBig={isBig} icon={tg} />
const TgSolidIcon = ({ isBig }) => <Icon isBig={isBig} icon={tgSolid} />
const VkIcon = ({ isBig }) => <Icon isBig={isBig} icon={vk} />
const MailIcon = ({ isBig }) => <Icon isBig={isBig} icon={mail} />
const SkypeIcon = ({ isBig }) => <Icon isBig={isBig} icon={skype} />
const TwitterIcon = ({ isBig }) => <Icon isBig={isBig} icon={twitter} />
const YoutubeIcon = ({ isBig }) => <Icon isBig={isBig} icon={youtube} />
const FbIcon = ({ isBig }) => <Icon isBig={isBig} icon={fb} />
const InstIcon = ({ isBig }) => <Icon isBig={isBig} icon={inst} />


export {
  CoinIcon,
  HeartIcon,
  RocketIcon,
  GraphIcon,
  LampIcon,
  ClientsIcon,
  StrongIcon,
  GiftIcon,
  TgIcon,
  TgSolidIcon,
  VkIcon,
  MailIcon,
  SkypeIcon,
  TwitterIcon,
  YoutubeIcon,
  FbIcon,
  InstIcon,
}