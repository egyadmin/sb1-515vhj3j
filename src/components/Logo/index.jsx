import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogoContainer, 
  LogoImage, 
  LogoText,
  MainText,
  SubText
} from './styles';
import { useRTL } from '../../contexts/RTLContext';

const Logo = () => {
  const { isRTL } = useRTL();
  const navigate = useNavigate();
  
  return (
    <LogoContainer
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate('/')}
    >
      <LogoImage
        src="https://f.top4top.io/p_3283fruis1.png"
        alt={isRTL ? "مركز إطلالة للبحوث والدراسات" : "Ittilaa Center for Research and Studies"}
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
      />
      <LogoText>
        <MainText>
          {isRTL ? "مركز إطلالة" : "Ittilaa Center"}
        </MainText>
        <SubText>
          {isRTL ? "للبحوث والدراسات" : "Research & Studies"}
        </SubText>
      </LogoText>
    </LogoContainer>
  );
};