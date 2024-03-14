
FROM docker.io/node:lts-alpine as builder

RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY  ./apps/web/tourism/package.json ./apps/web/tourism/package-lock.json ./
RUN npm install --frozen-lockfile --omit=dev

FROM docker.io/node:lts-alpine as runner
RUN apk add --no-cache dumb-init

ARG NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
ARG NEXTAUTH_SECRET=nextauth-secret
ARG NEXTAUTH_URL=http://localhost:3000

ENV NODE_ENV production
ENV PORT 3000
ENV HOST 0.0.0.0
ENV NEXT_TELEMETRY_DISABLED 1

ENV NEXT_PUBLIC_API_BASE_URL $NEXT_PUBLIC_API_BASE_URL
ENV NEXTAUTH_SECRET $NEXTAUTH_SECRET
ENV NEXTAUTH_URL $NEXTAUTH_URL

WORKDIR /usr/src/app

COPY --from=builder ./usr/src/app/node_modules ./node_modules
COPY ./apps/web/tourism/.next ./.next
COPY ./apps/web/tourism/package.json ./package.json

RUN chown -R node:node .
USER node
EXPOSE 3000

CMD ["dumb-init", "npm", "start"]

