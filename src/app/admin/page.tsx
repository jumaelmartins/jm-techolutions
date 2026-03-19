'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Code2, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import styles from './page.module.scss';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('Senha incorreta. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.orbPurple} />
      <div className={styles.orbBlue} />

      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <Code2 size={28} color="white" />
          </div>
          <h1 className={styles.title}>Painel Admin</h1>
          <p className={styles.subtitle}>JMTechSolutions CMS</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label className={styles.label}>
              <Lock size={14} />
              Senha de acesso
            </label>
            <div className={styles.inputWrapper}>
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••••••"
                className={[styles.input, error && styles.inputError].filter(Boolean).join(' ')}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className={styles.togglePass}
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className={styles.errorBox}>
              <AlertCircle size={16} color="#ff6b6b" />
              <span className={styles.errorText}>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className={styles.submitBtn}
          >
            {loading ? 'Verificando...' : 'Entrar no painel'}
          </button>
        </form>

        <p className={styles.footer}>Acesso restrito a administradores</p>
      </div>
    </div>
  );
}
