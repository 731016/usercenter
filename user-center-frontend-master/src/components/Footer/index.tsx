import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'xiaofei.site';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '小飞的个人笔记',
          title: <> 小飞的个人笔记</>,
          href: 'http://xiaofei.site/',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
