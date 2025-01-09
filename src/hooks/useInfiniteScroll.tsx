import { useEffect } from 'react';

const useInfiniteScroll = (ref: React.RefObject<HTMLDivElement>, callback: VoidFunction) => {

  const handleScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;

      console.log(scrollHeight - scrollTop, clientHeight)

      if (scrollHeight - scrollTop === clientHeight) {
        callback();
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  });
}

export default useInfiniteScroll;
