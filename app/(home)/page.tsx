'use client';

import type { ComponentProps, ReactNode } from 'react';
import Link from '@hanzo/docs/core/link';
import {
  Button,
  Grid,
  Paragraph,
  SizableText,
  XStack,
  YStack,
} from '@hanzo/ui';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Item {
  name: string;
  desc: string;
  href?: string;
}

const mission: Item[] = [
  { name: 'Decentralized AI Training', desc: 'Distributed compute marketplace' },
  { name: 'Open Source Frontier AI', desc: 'Zen model family (600M–480B parameters)' },
  { name: 'Collective Intelligence', desc: 'Byzantine-robust coordination (DSO)' },
  { name: 'Verifiable AI Compute', desc: 'Proof of AI (PoAI) consensus' },
  { name: 'Fair Distribution', desc: 'October 2021 genesis (100% airdrop to CryptoZoo)' },
];

const protocols = [
  {
    name: 'DSO',
    full: 'Decentralized Semantic Optimization',
    desc: "Multi-agent coordination protocol for distributed learning. Built on Hanzo's Active Semantic Optimization (ASO).",
    action: 'Read the DSO Paper →',
    href: 'https://zooai.github.io/papers/zoo-dso.pdf',
  },
  {
    name: 'PoAI',
    full: 'Proof of AI',
    desc: 'Consensus mechanism for verifiable AI compute with TEE attestations and quality verification.',
    action: 'Read ZIP-002 →',
    href: 'https://github.com/zooai/ZIPs/blob/main/ZIP-002-proof-of-ai.md',
  },
];

const ecosystem: Item[] = [
  { name: 'Zoo Network', desc: 'Blockchain infrastructure', href: 'https://zoo.network' },
  { name: 'Gym', desc: 'Decentralized AI training platform', href: 'https://gym.zoo.ngo' },
  { name: 'AI Chat', desc: 'AI assistant', href: 'https://ai.zoo.ngo' },
  { name: 'Zen Models', desc: 'Open source frontier LLMs', href: 'https://zenlm.ai' },
  { name: 'Vote', desc: 'Participate in governance decisions', href: 'https://zoo.vote' },
];

const community: Item[] = [
  { name: 'GitHub', desc: 'github.com/zooai', href: 'https://github.com/zooai' },
  { name: 'ZIPs', desc: 'Zoo Improvement Proposals', href: 'https://github.com/zooai/ZIPs' },
  { name: 'Research', desc: 'Papers', href: 'https://zooai.github.io/papers/' },
];

/* ------------------------------------------------------------------ */
/*  Pieces                                                             */
/* ------------------------------------------------------------------ */

/** A bordered surface that lifts under the cursor when it leads somewhere. */
function Panel({ href, ...props }: { href?: string } & ComponentProps<typeof YStack>) {
  return (
    <YStack
      borderWidth={1}
      borderColor="$borderColor"
      bg="$color2"
      rounded="$6"
      {...(href
        ? {
            render: <Link href={href} style={{ textDecoration: 'none' }} />,
            cursor: 'pointer',
            hoverStyle: { bg: '$color3', borderColor: '$color4' },
          }
        : null)}
      {...props}
    />
  );
}

/** A section title with the line under it that says what the section is. */
function Title({ children, sub }: { children: ReactNode; sub: string }) {
  return (
    <YStack mb="$5" gap="$1">
      <SizableText render="h2" size="$8" fontWeight="600" color="$color12">
        {children}
      </SizableText>
      <Paragraph size="$3" color="$color11">
        {sub}
      </Paragraph>
    </YStack>
  );
}

function Action({
  tone = 'primary',
  href,
  children,
}: {
  tone?: 'primary' | 'outline';
  href: string;
  children: ReactNode;
}) {
  return (
    <Button
      variant={tone === 'primary' ? 'default' : 'outline'}
      rounded="$4"
      px="$5"
      py="$3"
      render={<Link href={href} style={{ textDecoration: 'none' }} />}
    >
      {children}
    </Button>
  );
}

/** The faint wash behind the hero and the closing call. */
function Wash({ height }: { height: number }) {
  return (
    <YStack
      position="absolute"
      t={0}
      l={0}
      r={0}
      height={height}
      pointerEvents="none"
      style={{
        backgroundImage: `radial-gradient(${height * 2}px ${height}px ellipse at center top, var(--glass), transparent 70%)`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <YStack render="main" pb="$5" $md={{ pb: '$8' }}>
      {/* Hero */}
      <YStack
        position="relative"
        items="center"
        mx="auto"
        width="100%"
        maxW={1400}
        px="$5"
        pt="$12"
        pb="$10"
        $md={{ pt: '$15', pb: '$12' }}
      >
        <Wash height={300} />
        <SizableText
          size="$3"
          color="$color11"
          borderWidth={1}
          borderColor="$borderColor"
          bg="$color2"
          rounded="$10"
          px="$4"
          py="$1.5"
          mb="$5"
        >
          501(c)(3) · Open source · Genesis October 2021
        </SizableText>
        <SizableText
          render="h1"
          size="$12"
          fontWeight="600"
          mb="$5"
          text="center"
          $md={{ fontSize: '$14', lineHeight: '$14' }}
          style={{ letterSpacing: '-0.02em' }}
        >
          Zoo Labs Foundation
        </SizableText>
        <Paragraph
          size="$4"
          color="$color11"
          text="center"
          maxW={640}
          mb="$6"
          $md={{ fontSize: '$6', lineHeight: '$6' }}
        >
          Decentralized infrastructure for AI training and collective intelligence.
        </Paragraph>

        <XStack flexWrap="wrap" gap="$3" justify="center">
          <Action href="/docs">Read the Docs</Action>
          <Action tone="outline" href="https://github.com/zooai/ZIPs">
            ZIPs
          </Action>
          <Action tone="outline" href="https://github.com/zooai">
            GitHub
          </Action>
        </XStack>
      </YStack>

      <YStack mx="auto" width="100%" maxW={1400} px="$5" gap="$11" $md={{ px: '$8' }}>
        {/* Mission */}
        <YStack render="section">
          <Title sub="Democratizing AI through:">Mission</Title>
          <Grid min={220} max={5} gap="$3">
            {mission.map((item) => (
              <Panel key={item.name} p="$4" gap="$2">
                <SizableText size="$3" fontWeight="600" color="$color12">
                  {item.name}
                </SizableText>
                <SizableText size="$2" color="$color11">
                  {item.desc}
                </SizableText>
              </Panel>
            ))}
          </Grid>
        </YStack>

        {/* Core Protocols */}
        <YStack render="section">
          <Title sub="The two protocols the network is built on.">Core Protocols</Title>
          <Grid min={300} max={2} gap="$4">
            {protocols.map((p) => (
              <Panel key={p.name} href={p.href} p="$6" gap="$2" justify="space-between">
                <YStack gap="$2">
                  <XStack items="baseline" gap="$2" flexWrap="wrap">
                    <SizableText size="$6" fontWeight="600" color="$color12">
                      {p.name}
                    </SizableText>
                    <SizableText size="$2" color="$color11">
                      {p.full}
                    </SizableText>
                  </XStack>
                  <Paragraph size="$3" color="$color11">
                    {p.desc}
                  </Paragraph>
                </YStack>
                <SizableText size="$2" color="$color10" mt="$4">
                  {p.action}
                </SizableText>
              </Panel>
            ))}
          </Grid>
        </YStack>

        {/* Ecosystem */}
        <YStack render="section">
          <Title sub="Applications and services running on the network.">Ecosystem</Title>
          <Grid min={220} max={5} gap="$3">
            {ecosystem.map((item) => (
              <Panel key={item.name} href={item.href} p="$4" minH={120} justify="space-between">
                <YStack gap="$1">
                  <SizableText size="$3" fontWeight="600" color="$color12">
                    {item.name}
                  </SizableText>
                  <SizableText size="$2" color="$color11">
                    {item.desc}
                  </SizableText>
                </YStack>
                <SizableText size="$1" color="$color10" mt="$3">
                  Visit →
                </SizableText>
              </Panel>
            ))}
          </Grid>
        </YStack>

        {/* Community */}
        <YStack render="section">
          <Title sub="Join the Zoo community.">Community</Title>
          <Grid min={260} max={3} gap="$4">
            {community.map((item) => (
              <Panel key={item.name} href={item.href} p="$5" gap="$1">
                <SizableText size="$4" fontWeight="600" color="$color12">
                  {item.name}
                </SizableText>
                <SizableText size="$2" color="$color11">
                  {item.desc}
                </SizableText>
              </Panel>
            ))}
          </Grid>
        </YStack>

        {/* Start here */}
        <YStack render="section" position="relative" items="center" py="$10">
          <Wash height={200} />
          <SizableText render="h2" size="$10" fontWeight="600" mb="$3" text="center">
            Start here
          </SizableText>
          <Paragraph size="$3" color="$color11" mb="$5" text="center">
            Open source. Community governed.
          </Paragraph>
          <XStack flexWrap="wrap" gap="$3" justify="center">
            <Action href="/docs">Browse Documentation</Action>
            <Action tone="outline" href="https://zooai.github.io/papers/">
              Read the Papers
            </Action>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
