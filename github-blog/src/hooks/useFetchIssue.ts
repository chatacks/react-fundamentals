/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import type { Issues } from '../@types/issues.type';

export const useFetchIssue = () => {
  const [issues, setIssues] = useState<Issues | null>(null);

  const fetchIssues = useCallback(
    async (query = '') => {
      try {
        const response = await api.get('/search/issues', {
          params: {
            q: `repo:chatacks/react-fundamentals ${query}`,
          }
        });
        setIssues(response.data);
      } catch (error) {
        console.error('ocorreu um error', error);
      }
    }, []
  );

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return { issues, fetchIssues };
};
